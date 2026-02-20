import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken349 } from "./fragment349";
import type { FragmentToken350 } from "./fragment350";

export const FRAGMENT_351 = gql(`
  fragment Fragment351 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult351 = ResultOf<typeof FRAGMENT_351>;
type FragmentSelf351 = NonNullable<FragmentResult351>;

export type FragmentToken351 =
  | FragmentSelf351["__typename"]
  | FragmentSelf351["typenameHint"] | FragmentToken349 | FragmentToken350;

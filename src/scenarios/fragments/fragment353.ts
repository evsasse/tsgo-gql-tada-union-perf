import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken351 } from "./fragment351";
import type { FragmentToken352 } from "./fragment352";

export const FRAGMENT_353 = gql(`
  fragment Fragment353 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult353 = ResultOf<typeof FRAGMENT_353>;
type FragmentSelf353 = NonNullable<FragmentResult353>;

export type FragmentToken353 =
  | FragmentSelf353["__typename"]
  | FragmentSelf353["typenameHint"] | FragmentToken351 | FragmentToken352;

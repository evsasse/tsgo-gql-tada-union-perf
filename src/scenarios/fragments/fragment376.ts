import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken374 } from "./fragment374";
import type { FragmentToken375 } from "./fragment375";

export const FRAGMENT_376 = gql(`
  fragment Fragment376 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult376 = ResultOf<typeof FRAGMENT_376>;
type FragmentSelf376 = NonNullable<FragmentResult376>;

export type FragmentToken376 =
  | FragmentSelf376["__typename"]
  | FragmentSelf376["typenameHint"] | FragmentToken374 | FragmentToken375;

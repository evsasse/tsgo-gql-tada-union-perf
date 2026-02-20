import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken280 } from "./fragment280";
import type { FragmentToken281 } from "./fragment281";

export const FRAGMENT_282 = gql(`
  fragment Fragment282 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult282 = ResultOf<typeof FRAGMENT_282>;
type FragmentSelf282 = NonNullable<FragmentResult282>;

export type FragmentToken282 =
  | FragmentSelf282["__typename"]
  | FragmentSelf282["typenameHint"] | FragmentToken280 | FragmentToken281;

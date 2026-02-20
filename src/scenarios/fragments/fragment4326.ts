import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4324 } from "./fragment4324";
import type { FragmentToken4325 } from "./fragment4325";

export const FRAGMENT_4326 = gql(`
  fragment Fragment4326 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult4326 = ResultOf<typeof FRAGMENT_4326>;
type FragmentSelf4326 = NonNullable<FragmentResult4326>;

export type FragmentToken4326 =
  | FragmentSelf4326["__typename"]
  | FragmentSelf4326["typenameHint"] | FragmentToken4324 | FragmentToken4325;

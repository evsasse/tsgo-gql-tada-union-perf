import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4326 } from "./fragment4326";
import type { FragmentToken4327 } from "./fragment4327";

export const FRAGMENT_4328 = gql(`
  fragment Fragment4328 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult4328 = ResultOf<typeof FRAGMENT_4328>;
type FragmentSelf4328 = NonNullable<FragmentResult4328>;

export type FragmentToken4328 =
  | FragmentSelf4328["__typename"]
  | FragmentSelf4328["typenameHint"] | FragmentToken4326 | FragmentToken4327;

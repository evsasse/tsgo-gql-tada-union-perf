import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken249 } from "./fragment249";
import type { FragmentToken250 } from "./fragment250";

export const FRAGMENT_251 = gql(`
  fragment Fragment251 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult251 = ResultOf<typeof FRAGMENT_251>;
type FragmentSelf251 = NonNullable<FragmentResult251>;

export type FragmentToken251 =
  | FragmentSelf251["__typename"]
  | FragmentSelf251["typenameHint"] | FragmentToken249 | FragmentToken250;

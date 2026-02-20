import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken544 } from "./fragment544";
import type { FragmentToken545 } from "./fragment545";

export const FRAGMENT_546 = gql(`
  fragment Fragment546 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult546 = ResultOf<typeof FRAGMENT_546>;
type FragmentSelf546 = NonNullable<FragmentResult546>;

export type FragmentToken546 =
  | FragmentSelf546["__typename"]
  | FragmentSelf546["typenameHint"] | FragmentToken544 | FragmentToken545;

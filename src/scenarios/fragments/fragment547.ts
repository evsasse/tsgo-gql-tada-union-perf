import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken545 } from "./fragment545";
import type { FragmentToken546 } from "./fragment546";

export const FRAGMENT_547 = gql(`
  fragment Fragment547 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult547 = ResultOf<typeof FRAGMENT_547>;
type FragmentSelf547 = NonNullable<FragmentResult547>;

export type FragmentToken547 =
  | FragmentSelf547["__typename"]
  | FragmentSelf547["typenameHint"] | FragmentToken545 | FragmentToken546;

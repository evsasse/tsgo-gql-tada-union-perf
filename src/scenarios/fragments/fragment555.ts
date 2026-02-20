import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken553 } from "./fragment553";
import type { FragmentToken554 } from "./fragment554";

export const FRAGMENT_555 = gql(`
  fragment Fragment555 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult555 = ResultOf<typeof FRAGMENT_555>;
type FragmentSelf555 = NonNullable<FragmentResult555>;

export type FragmentToken555 =
  | FragmentSelf555["__typename"]
  | FragmentSelf555["typenameHint"] | FragmentToken553 | FragmentToken554;

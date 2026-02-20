import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken756 } from "./fragment756";
import type { FragmentToken757 } from "./fragment757";

export const FRAGMENT_758 = gql(`
  fragment Fragment758 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult758 = ResultOf<typeof FRAGMENT_758>;
type FragmentSelf758 = NonNullable<FragmentResult758>;

export type FragmentToken758 =
  | FragmentSelf758["__typename"]
  | FragmentSelf758["typenameHint"] | FragmentToken756 | FragmentToken757;

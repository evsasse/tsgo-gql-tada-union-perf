import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken148 } from "./fragment148";
import type { FragmentToken149 } from "./fragment149";

export const FRAGMENT_150 = gql(`
  fragment Fragment150 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult150 = ResultOf<typeof FRAGMENT_150>;
type FragmentSelf150 = NonNullable<FragmentResult150>;

export type FragmentToken150 =
  | FragmentSelf150["__typename"]
  | FragmentSelf150["typenameHint"] | FragmentToken148 | FragmentToken149;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1173 } from "./fragment1173";
import type { FragmentToken1174 } from "./fragment1174";

export const FRAGMENT_1175 = gql(`
  fragment Fragment1175 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult1175 = ResultOf<typeof FRAGMENT_1175>;
type FragmentSelf1175 = NonNullable<FragmentResult1175>;

export type FragmentToken1175 =
  | FragmentSelf1175["__typename"]
  | FragmentSelf1175["typenameHint"] | FragmentToken1173 | FragmentToken1174;

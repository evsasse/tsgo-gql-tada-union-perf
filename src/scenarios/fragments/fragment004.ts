import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken002 } from "./fragment002";
import type { FragmentToken003 } from "./fragment003";

export const FRAGMENT_004 = gql(`
  fragment Fragment004 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult004 = ResultOf<typeof FRAGMENT_004>;
type FragmentSelf004 = NonNullable<FragmentResult004>;

export type FragmentToken004 =
  | FragmentSelf004["__typename"]
  | FragmentSelf004["typenameHint"] | FragmentToken002 | FragmentToken003;

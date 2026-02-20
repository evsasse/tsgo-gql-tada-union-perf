import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken948 } from "./fragment948";
import type { FragmentToken949 } from "./fragment949";

export const FRAGMENT_950 = gql(`
  fragment Fragment950 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult950 = ResultOf<typeof FRAGMENT_950>;
type FragmentSelf950 = NonNullable<FragmentResult950>;

export type FragmentToken950 =
  | FragmentSelf950["__typename"]
  | FragmentSelf950["typenameHint"] | FragmentToken948 | FragmentToken949;

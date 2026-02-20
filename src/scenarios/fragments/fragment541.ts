import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken539 } from "./fragment539";
import type { FragmentToken540 } from "./fragment540";

export const FRAGMENT_541 = gql(`
  fragment Fragment541 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult541 = ResultOf<typeof FRAGMENT_541>;
type FragmentSelf541 = NonNullable<FragmentResult541>;

export type FragmentToken541 =
  | FragmentSelf541["__typename"]
  | FragmentSelf541["typenameHint"] | FragmentToken539 | FragmentToken540;

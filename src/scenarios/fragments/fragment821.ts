import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken819 } from "./fragment819";
import type { FragmentToken820 } from "./fragment820";

export const FRAGMENT_821 = gql(`
  fragment Fragment821 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult821 = ResultOf<typeof FRAGMENT_821>;
type FragmentSelf821 = NonNullable<FragmentResult821>;

export type FragmentToken821 =
  | FragmentSelf821["__typename"]
  | FragmentSelf821["typenameHint"] | FragmentToken819 | FragmentToken820;

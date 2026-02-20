import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3068 } from "./fragment3068";
import type { FragmentToken3069 } from "./fragment3069";

export const FRAGMENT_3070 = gql(`
  fragment Fragment3070 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult3070 = ResultOf<typeof FRAGMENT_3070>;
type FragmentSelf3070 = NonNullable<FragmentResult3070>;

export type FragmentToken3070 =
  | FragmentSelf3070["__typename"]
  | FragmentSelf3070["typenameHint"] | FragmentToken3068 | FragmentToken3069;

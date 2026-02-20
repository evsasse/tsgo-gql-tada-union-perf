import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3478 } from "./fragment3478";
import type { FragmentToken3479 } from "./fragment3479";

export const FRAGMENT_3480 = gql(`
  fragment Fragment3480 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult3480 = ResultOf<typeof FRAGMENT_3480>;
type FragmentSelf3480 = NonNullable<FragmentResult3480>;

export type FragmentToken3480 =
  | FragmentSelf3480["__typename"]
  | FragmentSelf3480["typenameHint"] | FragmentToken3478 | FragmentToken3479;

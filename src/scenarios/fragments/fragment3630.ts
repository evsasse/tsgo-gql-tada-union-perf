import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3628 } from "./fragment3628";
import type { FragmentToken3629 } from "./fragment3629";

export const FRAGMENT_3630 = gql(`
  fragment Fragment3630 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult3630 = ResultOf<typeof FRAGMENT_3630>;
type FragmentSelf3630 = NonNullable<FragmentResult3630>;

export type FragmentToken3630 =
  | FragmentSelf3630["__typename"]
  | FragmentSelf3630["typenameHint"] | FragmentToken3628 | FragmentToken3629;

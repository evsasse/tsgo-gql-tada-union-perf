import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2788 } from "./fragment2788";
import type { FragmentToken2789 } from "./fragment2789";

export const FRAGMENT_2790 = gql(`
  fragment Fragment2790 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult2790 = ResultOf<typeof FRAGMENT_2790>;
type FragmentSelf2790 = NonNullable<FragmentResult2790>;

export type FragmentToken2790 =
  | FragmentSelf2790["__typename"]
  | FragmentSelf2790["typenameHint"] | FragmentToken2788 | FragmentToken2789;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2740 } from "./fragment2740";
import type { FragmentToken2741 } from "./fragment2741";

export const FRAGMENT_2742 = gql(`
  fragment Fragment2742 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult2742 = ResultOf<typeof FRAGMENT_2742>;
type FragmentSelf2742 = NonNullable<FragmentResult2742>;

export type FragmentToken2742 =
  | FragmentSelf2742["__typename"]
  | FragmentSelf2742["typenameHint"] | FragmentToken2740 | FragmentToken2741;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2902 } from "./fragment2902";
import type { FragmentToken2903 } from "./fragment2903";

export const FRAGMENT_2904 = gql(`
  fragment Fragment2904 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult2904 = ResultOf<typeof FRAGMENT_2904>;
type FragmentSelf2904 = NonNullable<FragmentResult2904>;

export type FragmentToken2904 =
  | FragmentSelf2904["__typename"]
  | FragmentSelf2904["typenameHint"] | FragmentToken2902 | FragmentToken2903;

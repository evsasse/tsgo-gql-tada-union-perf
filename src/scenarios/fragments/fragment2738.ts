import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2736 } from "./fragment2736";
import type { FragmentToken2737 } from "./fragment2737";

export const FRAGMENT_2738 = gql(`
  fragment Fragment2738 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult2738 = ResultOf<typeof FRAGMENT_2738>;
type FragmentSelf2738 = NonNullable<FragmentResult2738>;

export type FragmentToken2738 =
  | FragmentSelf2738["__typename"]
  | FragmentSelf2738["typenameHint"] | FragmentToken2736 | FragmentToken2737;

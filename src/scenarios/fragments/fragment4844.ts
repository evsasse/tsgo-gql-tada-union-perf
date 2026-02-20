import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4842 } from "./fragment4842";
import type { FragmentToken4843 } from "./fragment4843";

export const FRAGMENT_4844 = gql(`
  fragment Fragment4844 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult4844 = ResultOf<typeof FRAGMENT_4844>;
type FragmentSelf4844 = NonNullable<FragmentResult4844>;

export type FragmentToken4844 =
  | FragmentSelf4844["__typename"]
  | FragmentSelf4844["typenameHint"] | FragmentToken4842 | FragmentToken4843;

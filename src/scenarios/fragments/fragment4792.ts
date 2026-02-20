import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4790 } from "./fragment4790";
import type { FragmentToken4791 } from "./fragment4791";

export const FRAGMENT_4792 = gql(`
  fragment Fragment4792 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult4792 = ResultOf<typeof FRAGMENT_4792>;
type FragmentSelf4792 = NonNullable<FragmentResult4792>;

export type FragmentToken4792 =
  | FragmentSelf4792["__typename"]
  | FragmentSelf4792["typenameHint"] | FragmentToken4790 | FragmentToken4791;

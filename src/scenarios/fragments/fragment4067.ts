import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4065 } from "./fragment4065";
import type { FragmentToken4066 } from "./fragment4066";

export const FRAGMENT_4067 = gql(`
  fragment Fragment4067 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult4067 = ResultOf<typeof FRAGMENT_4067>;
type FragmentSelf4067 = NonNullable<FragmentResult4067>;

export type FragmentToken4067 =
  | FragmentSelf4067["__typename"]
  | FragmentSelf4067["typenameHint"] | FragmentToken4065 | FragmentToken4066;

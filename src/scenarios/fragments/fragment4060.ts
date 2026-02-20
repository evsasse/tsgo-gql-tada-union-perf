import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4058 } from "./fragment4058";
import type { FragmentToken4059 } from "./fragment4059";

export const FRAGMENT_4060 = gql(`
  fragment Fragment4060 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult4060 = ResultOf<typeof FRAGMENT_4060>;
type FragmentSelf4060 = NonNullable<FragmentResult4060>;

export type FragmentToken4060 =
  | FragmentSelf4060["__typename"]
  | FragmentSelf4060["typenameHint"] | FragmentToken4058 | FragmentToken4059;

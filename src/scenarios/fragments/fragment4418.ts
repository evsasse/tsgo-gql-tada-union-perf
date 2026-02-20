import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4416 } from "./fragment4416";
import type { FragmentToken4417 } from "./fragment4417";

export const FRAGMENT_4418 = gql(`
  fragment Fragment4418 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult4418 = ResultOf<typeof FRAGMENT_4418>;
type FragmentSelf4418 = NonNullable<FragmentResult4418>;

export type FragmentToken4418 =
  | FragmentSelf4418["__typename"]
  | FragmentSelf4418["typenameHint"] | FragmentToken4416 | FragmentToken4417;

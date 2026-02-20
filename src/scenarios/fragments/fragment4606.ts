import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4604 } from "./fragment4604";
import type { FragmentToken4605 } from "./fragment4605";

export const FRAGMENT_4606 = gql(`
  fragment Fragment4606 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult4606 = ResultOf<typeof FRAGMENT_4606>;
type FragmentSelf4606 = NonNullable<FragmentResult4606>;

export type FragmentToken4606 =
  | FragmentSelf4606["__typename"]
  | FragmentSelf4606["typenameHint"] | FragmentToken4604 | FragmentToken4605;

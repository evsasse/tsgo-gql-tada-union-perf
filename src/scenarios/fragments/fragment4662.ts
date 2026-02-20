import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4660 } from "./fragment4660";
import type { FragmentToken4661 } from "./fragment4661";

export const FRAGMENT_4662 = gql(`
  fragment Fragment4662 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult4662 = ResultOf<typeof FRAGMENT_4662>;
type FragmentSelf4662 = NonNullable<FragmentResult4662>;

export type FragmentToken4662 =
  | FragmentSelf4662["__typename"]
  | FragmentSelf4662["typenameHint"] | FragmentToken4660 | FragmentToken4661;

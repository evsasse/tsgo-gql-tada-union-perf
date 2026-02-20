import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4255 } from "./fragment4255";
import type { FragmentToken4256 } from "./fragment4256";

export const FRAGMENT_4257 = gql(`
  fragment Fragment4257 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult4257 = ResultOf<typeof FRAGMENT_4257>;
type FragmentSelf4257 = NonNullable<FragmentResult4257>;

export type FragmentToken4257 =
  | FragmentSelf4257["__typename"]
  | FragmentSelf4257["typenameHint"] | FragmentToken4255 | FragmentToken4256;

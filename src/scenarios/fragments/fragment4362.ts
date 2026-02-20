import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4360 } from "./fragment4360";
import type { FragmentToken4361 } from "./fragment4361";

export const FRAGMENT_4362 = gql(`
  fragment Fragment4362 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult4362 = ResultOf<typeof FRAGMENT_4362>;
type FragmentSelf4362 = NonNullable<FragmentResult4362>;

export type FragmentToken4362 =
  | FragmentSelf4362["__typename"]
  | FragmentSelf4362["typenameHint"] | FragmentToken4360 | FragmentToken4361;

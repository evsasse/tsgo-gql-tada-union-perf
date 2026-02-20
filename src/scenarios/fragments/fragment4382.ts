import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4380 } from "./fragment4380";
import type { FragmentToken4381 } from "./fragment4381";

export const FRAGMENT_4382 = gql(`
  fragment Fragment4382 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult4382 = ResultOf<typeof FRAGMENT_4382>;
type FragmentSelf4382 = NonNullable<FragmentResult4382>;

export type FragmentToken4382 =
  | FragmentSelf4382["__typename"]
  | FragmentSelf4382["typenameHint"] | FragmentToken4380 | FragmentToken4381;

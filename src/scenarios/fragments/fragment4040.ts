import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4038 } from "./fragment4038";
import type { FragmentToken4039 } from "./fragment4039";

export const FRAGMENT_4040 = gql(`
  fragment Fragment4040 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult4040 = ResultOf<typeof FRAGMENT_4040>;
type FragmentSelf4040 = NonNullable<FragmentResult4040>;

export type FragmentToken4040 =
  | FragmentSelf4040["__typename"]
  | FragmentSelf4040["typenameHint"] | FragmentToken4038 | FragmentToken4039;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4511 } from "./fragment4511";
import type { FragmentToken4512 } from "./fragment4512";

export const FRAGMENT_4513 = gql(`
  fragment Fragment4513 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult4513 = ResultOf<typeof FRAGMENT_4513>;
type FragmentSelf4513 = NonNullable<FragmentResult4513>;

export type FragmentToken4513 =
  | FragmentSelf4513["__typename"]
  | FragmentSelf4513["typenameHint"] | FragmentToken4511 | FragmentToken4512;

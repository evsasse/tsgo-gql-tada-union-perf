import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4286 } from "./fragment4286";
import type { FragmentToken4287 } from "./fragment4287";

export const FRAGMENT_4288 = gql(`
  fragment Fragment4288 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult4288 = ResultOf<typeof FRAGMENT_4288>;
type FragmentSelf4288 = NonNullable<FragmentResult4288>;

export type FragmentToken4288 =
  | FragmentSelf4288["__typename"]
  | FragmentSelf4288["typenameHint"] | FragmentToken4286 | FragmentToken4287;

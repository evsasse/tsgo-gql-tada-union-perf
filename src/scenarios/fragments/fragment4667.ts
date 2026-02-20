import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4665 } from "./fragment4665";
import type { FragmentToken4666 } from "./fragment4666";

export const FRAGMENT_4667 = gql(`
  fragment Fragment4667 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult4667 = ResultOf<typeof FRAGMENT_4667>;
type FragmentSelf4667 = NonNullable<FragmentResult4667>;

export type FragmentToken4667 =
  | FragmentSelf4667["__typename"]
  | FragmentSelf4667["typenameHint"] | FragmentToken4665 | FragmentToken4666;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4975 } from "./fragment4975";
import type { FragmentToken4976 } from "./fragment4976";

export const FRAGMENT_4977 = gql(`
  fragment Fragment4977 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult4977 = ResultOf<typeof FRAGMENT_4977>;
type FragmentSelf4977 = NonNullable<FragmentResult4977>;

export type FragmentToken4977 =
  | FragmentSelf4977["__typename"]
  | FragmentSelf4977["typenameHint"] | FragmentToken4975 | FragmentToken4976;

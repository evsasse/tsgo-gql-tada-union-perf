import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken086 } from "./fragment086";
import type { FragmentToken087 } from "./fragment087";

export const FRAGMENT_088 = gql(`
  fragment Fragment088 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult088 = ResultOf<typeof FRAGMENT_088>;
type FragmentSelf088 = NonNullable<FragmentResult088>;

export type FragmentToken088 =
  | FragmentSelf088["__typename"]
  | FragmentSelf088["typenameHint"] | FragmentToken086 | FragmentToken087;

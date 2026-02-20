import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4027 } from "./fragment4027";
import type { FragmentToken4028 } from "./fragment4028";

export const FRAGMENT_4029 = gql(`
  fragment Fragment4029 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult4029 = ResultOf<typeof FRAGMENT_4029>;
type FragmentSelf4029 = NonNullable<FragmentResult4029>;

export type FragmentToken4029 =
  | FragmentSelf4029["__typename"]
  | FragmentSelf4029["typenameHint"] | FragmentToken4027 | FragmentToken4028;

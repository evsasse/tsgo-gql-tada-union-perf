import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4026 } from "./fragment4026";
import type { FragmentToken4027 } from "./fragment4027";

export const FRAGMENT_4028 = gql(`
  fragment Fragment4028 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult4028 = ResultOf<typeof FRAGMENT_4028>;
type FragmentSelf4028 = NonNullable<FragmentResult4028>;

export type FragmentToken4028 =
  | FragmentSelf4028["__typename"]
  | FragmentSelf4028["typenameHint"] | FragmentToken4026 | FragmentToken4027;

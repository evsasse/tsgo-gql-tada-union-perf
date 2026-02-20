import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4024 } from "./fragment4024";
import type { FragmentToken4025 } from "./fragment4025";

export const FRAGMENT_4026 = gql(`
  fragment Fragment4026 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult4026 = ResultOf<typeof FRAGMENT_4026>;
type FragmentSelf4026 = NonNullable<FragmentResult4026>;

export type FragmentToken4026 =
  | FragmentSelf4026["__typename"]
  | FragmentSelf4026["typenameHint"] | FragmentToken4024 | FragmentToken4025;

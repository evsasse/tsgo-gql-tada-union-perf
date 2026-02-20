import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4020 } from "./fragment4020";
import type { FragmentToken4021 } from "./fragment4021";

export const FRAGMENT_4022 = gql(`
  fragment Fragment4022 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult4022 = ResultOf<typeof FRAGMENT_4022>;
type FragmentSelf4022 = NonNullable<FragmentResult4022>;

export type FragmentToken4022 =
  | FragmentSelf4022["__typename"]
  | FragmentSelf4022["typenameHint"] | FragmentToken4020 | FragmentToken4021;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken075 } from "./fragment075";
import type { FragmentToken076 } from "./fragment076";

export const FRAGMENT_077 = gql(`
  fragment Fragment077 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult077 = ResultOf<typeof FRAGMENT_077>;
type FragmentSelf077 = NonNullable<FragmentResult077>;

export type FragmentToken077 =
  | FragmentSelf077["__typename"]
  | FragmentSelf077["typenameHint"] | FragmentToken075 | FragmentToken076;

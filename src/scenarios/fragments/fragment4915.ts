import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4913 } from "./fragment4913";
import type { FragmentToken4914 } from "./fragment4914";

export const FRAGMENT_4915 = gql(`
  fragment Fragment4915 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult4915 = ResultOf<typeof FRAGMENT_4915>;
type FragmentSelf4915 = NonNullable<FragmentResult4915>;

export type FragmentToken4915 =
  | FragmentSelf4915["__typename"]
  | FragmentSelf4915["typenameHint"] | FragmentToken4913 | FragmentToken4914;

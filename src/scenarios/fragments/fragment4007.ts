import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4005 } from "./fragment4005";
import type { FragmentToken4006 } from "./fragment4006";

export const FRAGMENT_4007 = gql(`
  fragment Fragment4007 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult4007 = ResultOf<typeof FRAGMENT_4007>;
type FragmentSelf4007 = NonNullable<FragmentResult4007>;

export type FragmentToken4007 =
  | FragmentSelf4007["__typename"]
  | FragmentSelf4007["typenameHint"] | FragmentToken4005 | FragmentToken4006;

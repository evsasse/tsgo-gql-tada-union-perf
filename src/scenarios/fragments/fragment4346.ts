import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4344 } from "./fragment4344";
import type { FragmentToken4345 } from "./fragment4345";

export const FRAGMENT_4346 = gql(`
  fragment Fragment4346 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult4346 = ResultOf<typeof FRAGMENT_4346>;
type FragmentSelf4346 = NonNullable<FragmentResult4346>;

export type FragmentToken4346 =
  | FragmentSelf4346["__typename"]
  | FragmentSelf4346["typenameHint"] | FragmentToken4344 | FragmentToken4345;

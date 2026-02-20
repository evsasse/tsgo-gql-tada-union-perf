import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken748 } from "./fragment748";
import type { FragmentToken749 } from "./fragment749";

export const FRAGMENT_750 = gql(`
  fragment Fragment750 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult750 = ResultOf<typeof FRAGMENT_750>;
type FragmentSelf750 = NonNullable<FragmentResult750>;

export type FragmentToken750 =
  | FragmentSelf750["__typename"]
  | FragmentSelf750["typenameHint"] | FragmentToken748 | FragmentToken749;

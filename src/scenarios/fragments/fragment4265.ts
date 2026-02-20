import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4263 } from "./fragment4263";
import type { FragmentToken4264 } from "./fragment4264";

export const FRAGMENT_4265 = gql(`
  fragment Fragment4265 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult4265 = ResultOf<typeof FRAGMENT_4265>;
type FragmentSelf4265 = NonNullable<FragmentResult4265>;

export type FragmentToken4265 =
  | FragmentSelf4265["__typename"]
  | FragmentSelf4265["typenameHint"] | FragmentToken4263 | FragmentToken4264;

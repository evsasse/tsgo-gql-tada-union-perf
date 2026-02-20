import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4242 } from "./fragment4242";
import type { FragmentToken4243 } from "./fragment4243";

export const FRAGMENT_4244 = gql(`
  fragment Fragment4244 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult4244 = ResultOf<typeof FRAGMENT_4244>;
type FragmentSelf4244 = NonNullable<FragmentResult4244>;

export type FragmentToken4244 =
  | FragmentSelf4244["__typename"]
  | FragmentSelf4244["typenameHint"] | FragmentToken4242 | FragmentToken4243;

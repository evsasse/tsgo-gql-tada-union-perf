import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4856 } from "./fragment4856";
import type { FragmentToken4857 } from "./fragment4857";

export const FRAGMENT_4858 = gql(`
  fragment Fragment4858 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult4858 = ResultOf<typeof FRAGMENT_4858>;
type FragmentSelf4858 = NonNullable<FragmentResult4858>;

export type FragmentToken4858 =
  | FragmentSelf4858["__typename"]
  | FragmentSelf4858["typenameHint"] | FragmentToken4856 | FragmentToken4857;

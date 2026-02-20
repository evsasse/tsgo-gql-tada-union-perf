import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4304 } from "./fragment4304";
import type { FragmentToken4305 } from "./fragment4305";

export const FRAGMENT_4306 = gql(`
  fragment Fragment4306 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult4306 = ResultOf<typeof FRAGMENT_4306>;
type FragmentSelf4306 = NonNullable<FragmentResult4306>;

export type FragmentToken4306 =
  | FragmentSelf4306["__typename"]
  | FragmentSelf4306["typenameHint"] | FragmentToken4304 | FragmentToken4305;

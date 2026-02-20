import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4102 } from "./fragment4102";
import type { FragmentToken4103 } from "./fragment4103";

export const FRAGMENT_4104 = gql(`
  fragment Fragment4104 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult4104 = ResultOf<typeof FRAGMENT_4104>;
type FragmentSelf4104 = NonNullable<FragmentResult4104>;

export type FragmentToken4104 =
  | FragmentSelf4104["__typename"]
  | FragmentSelf4104["typenameHint"] | FragmentToken4102 | FragmentToken4103;
